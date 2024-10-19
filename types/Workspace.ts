export type Workspace = {
    id: string;
    name: string;
    description?: string;
    ownerId: string;
    globalSharingType: "no" | "viewer" | "editor";
    createdAt: Date;
    updatedAt: Date;
}