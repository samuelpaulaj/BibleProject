import { create } from "zustand";

export type SectionNames =
  | "Index"
  | "Old Testament"
  | "New Testament"
  | "Word Search";

export type SubSectionNames =
  | "Genesis"
  | "Exodus"
  | "Leviticus"
  | "Numbers"
  | "Deuteronomy"
  | "Joshua"
  | "Judges"
  | "Ruth"
  | "1 Samuel"
  | "2 Samuel"
  | "1 Kings"
  | "2 Kings"
  | "1 Chronicles"
  | "2 Chronicles"
  | "Ezra"
  | "Nehemiah"
  | "Esther"
  | "Job"
  | "Psalms"
  | "Proverbs"
  | "Ecclesiastes"
  | "Songs of Solomon"
  | "Isaiah"
  | "Jeremiah"
  | "Lamentations"
  | "Ezekiel"
  | "Daniel"
  | "Hosea"
  | "Joel"
  | "Amos"
  | "Obadiah"
  | "Jonah"
  | "Micah"
  | "Nahum"
  | "Habakkuk"
  | "Zephaniah"
  | "Haggai"
  | "Zechariah"
  | "Malachi"
  | "Matthew"
  | "Mark"
  | "Luke"
  | "John"
  | "Acts"
  | "Romans"
  | "1 Corinthians"
  | "2 Corinthians"
  | "Galatians"
  | "Ephesians"
  | "Philippians"
  | "Colossians"
  | "1 Thessalonians"
  | "2 Thessalonians"
  | "1 Timothy"
  | "2 Timothy"
  | "Titus"
  | "Philemon"
  | "Hebrews"
  | "James"
  | "1 Peter"
  | "2 Peter"
  | "1 John"
  | "2 John"
  | "3 John"
  | "Jude"
  | "Revelation";

export interface SectionType {
  name: SectionNames;
  id: string;
  subSections: {
    name: SubSectionNames;
    id: string;
  }[];
}

export const initializeDefaultSections = (): SectionType[] => [
  {
    name: "Index",
    id: "index",
    subSections: [],
  },
  {
    name: "Old Testament",
    id: "old_testament",
    subSections: [
      {
        name: "Genesis",
        id: "genesis_subSection",
      },
      { name: "Exodus", id: "exodus_subSection" },
      { name: "Leviticus", id: "leviticus_subSection" },
      { name: "Numbers", id: "numbers_subSection" },
      { name: "Deuteronomy", id: "deuteronomy_subSection" },
      { name: "Joshua", id: "joshua_subSection" },
      { name: "Judges", id: "judges_subSection" },
      { name: "Ruth", id: "ruth_subSection" },
      { name: "1 Samuel", id: "1_samuel_subSection" },
      { name: "2 Samuel", id: "2_samuel_subSection" },
      { name: "1 Kings", id: "1_kings_subSection" },
      { name: "2 Kings", id: "2_kings_subSection" },
      { name: "1 Chronicles", id: "1_chronicles_subSection" },
      { name: "2 Chronicles", id: "2_chronicles_subSection" },
      { name: "Ezra", id: "ezra_subSection" },
      { name: "Nehemiah", id: "nehemiah_subSection" },
      { name: "Esther", id: "esther_subSection" },
      { name: "Job", id: "job_subSection" },
      { name: "Psalms", id: "psalms_subSection" },
      { name: "Proverbs", id: "proverbs_subSection" },
      { name: "Ecclesiastes", id: "ecclesiastes_subSection" },
      { name: "Songs of Solomon", id: "songs_of_solomon_subSection" },
      { name: "Isaiah", id: "isaiah_subSection" },
      { name: "Jeremiah", id: "jeremiah_subSection" },
      { name: "Lamentations", id: "lamentations_subSection" },
      { name: "Ezekiel", id: "ezekiel_subSection" },
      { name: "Daniel", id: "daniel_subSection" },
      { name: "Hosea", id: "hosea_subSection" },
      { name: "Joel", id: "joel_subSection" },
      { name: "Amos", id: "amos_subSection" },
      { name: "Obadiah", id: "obadiah_subSection" },
      { name: "Jonah", id: "jonah_subSection" },
      { name: "Micah", id: "micah_subSection" },
      { name: "Nahum", id: "nahum_subSection" },
      { name: "Habakkuk", id: "habakkuk_subSection" },
      { name: "Zephaniah", id: "zephaniah_subSection" },
      { name: "Haggai", id: "haggai_subSection" },
      { name: "Zechariah", id: "zechariah_subSection" },
      { name: "Malachi", id: "malachi_subSection" },
    ],
  },
  {
    name: "New Testament",
    id: "new_testament",
    subSections: [
      {
        name: "Matthew",
        id: "matthew_subSection",
      },
      { name: "Mark", id: "mark_subSection" },
      { name: "Luke", id: "luke_subSection" },
      { name: "John", id: "john_subSection" },
      { name: "Acts", id: "acts_subSection" },
      { name: "Romans", id: "romans_subSection" },
      { name: "1 Corinthians", id: "1_corinthians_subSection" },
      { name: "2 Corinthians", id: "2_corinthians_subSection" },
      { name: "Galatians", id: "galatians_subSection" },
      { name: "Ephesians", id: "ephesians_subSection" },
      { name: "Philippians", id: "philippians_subSection" },
      { name: "Colossians", id: "colossians_subSection" },
      { name: "1 Thessalonians", id: "1_thessalonians_subSection" },
      { name: "2 Thessalonians", id: "2_thessalonians_subSection" },
      { name: "1 Timothy", id: "1_timothy_subSection" },
      { name: "2 Timothy", id: "2_timothy_subSection" },
      { name: "Titus", id: "titus_subSection" },
      { name: "Philemon", id: "philemon_subSection" },
      { name: "Hebrews", id: "hebrews_subSection" },
      { name: "James", id: "james_subSection" },
      { name: "1 Peter", id: "1_peter_subSection" },
      { name: "2 Peter", id: "2_peter_subSection" },
      { name: "1 John", id: "1_john_subSection" },
      { name: "2 John", id: "2_john_subSection" },
      { name: "3 John", id: "3_john_subSection" },
      { name: "Jude", id: "jude_subSection" },
      { name: "Revelation", id: "revelation_subSection" },
    ],
  },
  {
    name: "Word Search",
    id: "word_search",
    subSections: [],
  },
];

interface SideNavStore {
  currentSection: SectionNames;
  currentSubSection: SubSectionNames;
  Sections: SectionType[];
  setCurrentSection: (name: SectionNames) => void;
  setCurrentSubSection: (name: SubSectionNames) => void;
}

export const useSideNavStore = create<SideNavStore>((set) => ({
  currentSection: "Index",
  currentSubSection: "Genesis",
  Sections: initializeDefaultSections(),
  setCurrentSection: (name: SectionNames) =>
    set((state) => {
      if (state.currentSection !== name) {
        return {
          currentSection: name,
          currentSubSection: state.Sections.find(
            (section) => section.name === name
          )!.subSections.at(0)!.name,
        };
      } else
        return {
          currentSection: state.currentSection,
          currentSubSection: state.currentSubSection,
        };
    }),
  setCurrentSubSection: (name: SubSectionNames) =>
    set((state) => ({
      currentSubSection: name,
      currentSection: state.Sections.find((section) =>
        section.subSections.find((subSection) => subSection.name === name)
      )!.name,
    })),
}));
