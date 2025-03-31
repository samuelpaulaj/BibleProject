import { create } from "zustand";

interface Question {
  id: number;
  questionText: string;
  choices: string[];
  dateCreated: string;
}

interface QuestionStore {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  addQuestion: (question: Question) => void;
  removeQuestion: (id: number) => void;
  updateQuestion: (id: number, updatedQuestion: Partial<Question>) => void;
}

const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [
    {
      id: 1,
      questionText: "மத்தேயு 15:8 பதில் யாருக்கு கூறப்பட்டது?",
      choices: ["யூதர்கள்", "பரிசேயர்கள்", "சீஷர்கள்", "பிலாத்து"],
      dateCreated: "2025-03-25T00:00:00",
    },
    {
      id: 2,
      questionText: "யார் பரலோக ராஜ்ஜியத்தில் பிரவேசிப்பார்கள்?",
      choices: [
        "கிறிஸ்துவின் சபையார்கள் அனைவரும்",
        "தீர்க்கதரிசனம் உரைப்பவர்கள்",
        "பிசாசுகளை துரத்துபவர்கள்",
        "பிதாவின் சித்தத்தின்படி செய்கிறவர்கள்",
      ],
      dateCreated: "2025-03-25T00:00:00",
    },
  ],
  setQuestions: (questions) => set({ questions }),
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
