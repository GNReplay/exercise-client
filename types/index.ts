export interface User {
    name: string,
    email: string,
    image: string,
    bio?: string,
    role: string;
}

export interface Exercise {
    id: string;
    token: string;
    title: string;
    type: string;
    isOpen: boolean;
    lessonId: string;
    quizz: Quizz[];
    create_at: Date;
}

export interface Quizz {
    id: string;
    token: string;
    question: string;
    answer: string;
    option: string[];
    position: number;
    isPublished: boolean;
    explain: string;
}

export enum TypeExercise {
    Quizz = 'QUIZZ',
    Image = 'IMAGE',
    Code = 'CODE'
}

export enum TypeQuizz {
    TF = "True Or False",
    MC = "Multiple Choice"
}

export enum LevelQuizz {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}