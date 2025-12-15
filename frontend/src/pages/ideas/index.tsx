import { Page } from "@/components/page";
import { Label } from "@/components/ui/label";
import { CreateIdeaDialog } from "./components/create-idea-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useQuery } from "@apollo/client/react"
import { LIST_IDEAS } from "@/lib/graphql/queries/Idea";
import type { Idea } from "@/types";
import { IdeaCard } from "./components/idea-card";
import { IdeaDetailDrawer } from "./components/idea-detail-drawer";

export function IdeasPage() {
  const [isCreateIdeaDialogOpen, setIsCreateIdeaDialogOpen] = useState(false);
  const [openIdeaDrawer, setOpenIdeaDrawer] = useState(false)
  const [selectedIdeaId, setSelectedIdeaId] = useState<string | null>(null);

  const { data, loading, refetch } = useQuery<{ listIdeas: Idea[] }>(LIST_IDEAS)

  const ideas = data?.listIdeas || [];

  const handleIdeaClick = (ideaId: string) => {
    setSelectedIdeaId(ideaId)
    setOpenIdeaDrawer(true)
  }

  return (
    <Page>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Label className="text-3xl font-medium text-purple-600">Ideias</Label>
          <Button onClick={() => setIsCreateIdeaDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nova Ideia
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pt-6">
        {loading &&
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`idea-skeleton-${i}`}
              className="h-32 rounded-lg border border-dashed border-muted-foreground/30"
            />
          ))}
        {!loading && ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
            onClick={() => handleIdeaClick(idea.id)}
          />
        ))}
      </div>

      <IdeaDetailDrawer
        open={openIdeaDrawer}
        onOpenChange={setOpenIdeaDrawer}
        ideaId={selectedIdeaId}
      />

      <CreateIdeaDialog
        open={isCreateIdeaDialogOpen}
        onOpenChange={setIsCreateIdeaDialogOpen}
      />
    </Page>
  );
}
