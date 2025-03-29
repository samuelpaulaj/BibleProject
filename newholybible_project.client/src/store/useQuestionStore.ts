import { create } from "zustand";

interface Choice {
  choiceText: string;
}

interface Question {
  id: number;
  questionText: string;
  choices: Choice[];
  dateCreated: string;
}

interface QuestionStore {
  questions: Question[];
  addQuestion: (question: Question) => void;
  removeQuestion: (id: number) => void;
  updateQuestion: (id: number, updatedQuestion: Partial<Question>) => void;
}

const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [
    {
      id: 1,
      questionText: "மத்தேயு 15:8 பதில் யாருக்கு கூறப்பட்டது?",
      choices: [
        { choiceText: "யூதர்கள்" },
        { choiceText: "பரிசேயர்கள்" },
        { choiceText: "சீஷர்கள்" },
        { choiceText: "பிலாத்து" },
      ],
      dateCreated: "2025-03-25T00:00:00",
    },
    {
      id: 2,
      questionText: "யார் பரலோக ராஜ்ஜியத்தில் பிரவேசிப்பார்கள்?",
      choices: [
        { choiceText: "கிறிஸ்துவின் சபையார்கள் அனைவரும்" },
        { choiceText: "தீர்க்கதரிசனம் உரைப்பவர்கள்" },
        { choiceText: "பிசாசுகளை துரத்துபவர்கள்" },
        { choiceText: "பிதாவின் சித்தத்தின்படி செய்கிறவர்கள்" },
      ],
      dateCreated: "2025-03-25T00:00:00",
    },
  ],
  addQuestion: (question) =>
    set((state) => ({
      questions: [...state.questions, question],
    })),
  removeQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((question) => question.id !== id),
    })),
  updateQuestion: (id, updatedQuestion) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === id ? { ...question, ...updatedQuestion } : question
      ),
    })),
}));

export default useQuestionStore;
