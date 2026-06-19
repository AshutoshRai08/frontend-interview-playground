export type Difficulty = "Easy" | "Medium" | "Hard";

export type Status = "Not Started" | "In Progress" | "Completed";

export interface AppCardData {
  id: string;
  title: string;
  difficulty: Difficulty;
  route: string;
  status: Status;
}
