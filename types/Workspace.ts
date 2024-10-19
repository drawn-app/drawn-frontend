export type Workspace = {
    id: string;
    name: string;
    description?: string;
    ownerId: string;
    globalSharingType: string;
    createdAt: Date;
    updatedAt: Date;
}