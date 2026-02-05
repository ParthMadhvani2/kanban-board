declare type AssigneeType = {
    username: string;
    avatar: string;
};

declare type TeamNameType = 'FRONTEND' | 'BACKEND' | 'DESIGN' | 'DEVOPS' | 'BUG' | 'COMPLETED';

declare type KanbanCardType = {
    teamName: TeamNameType;
    taskTitle: string;
    ticketID: number;
    tags?: string[];
    assignees: AssigneeType[];
}

declare type KanbanListType = {
    listName: string;
    listItems: KanbanCardType[];
}