import {
  BriefcaseIcon,
  ComputerDesktopIcon,
  CommandLineIcon,
  AcademicCapIcon,
  BookOpenIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
export interface AllsNavbars {
  id: number;
  Link: string;
  name: string;
}
export interface AllsNavBarDash {
  icon: any;
  href: string;
  name: string;
  current: boolean;
}
export interface FormInputArea {
  id: number;
  Title: string;
  name: string;
  Code: string;
}

export const navbar: AllsNavbars[] = [
  { id: 1, name: "Home", Link: "#" },
  { id: 2, name: "AboutMe", Link: "#AboutMe" },
  { id: 3, name: "Resume", Link: "#Resume" },
  { id: 4, name: "ContactMe", Link: "#ContactMe" },
];

export const NavBarDash: AllsNavBarDash[] = [
  {
    name: "Dashboard",
    href: "/Admin/dashboard",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Profile",
    href: "/Admin/dashboard/Profile",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "AboutMe",
    href: "/Admin/dashboard/Profile/#AboutMe",
    icon: BookOpenIcon,
    current: false,
  },
  {
    name: "Education",
    href: "/Admin/dashboard/Education",
    icon: AcademicCapIcon,
    current: false,
  },
  {
    name: "WorkHistory",
    href: "/Admin/dashboard/WorkHistory",
    icon: BriefcaseIcon,
    current: false,
  },
  {
    name: "ProgrammingSkills",
    href: "/Admin/dashboard/ProgrammingSkills",
    icon: CommandLineIcon,
    current: false,
  },
  {
    name: "Projects",
    href: "/Admin/dashboard/Project",
    icon: ComputerDesktopIcon,
    current: false,
  },
];

export const Education: AllsNavbars[] = [
  { id: 1, name: "colum", Link: "#" },
  { id: 2, name: "EducationLogo", Link: "#" },
  { id: 3, name: "EducationTitleEn", Link: "#" },
  { id: 4, name: "EducationTitleDe", Link: "#" },
  { id: 5, name: "EducationTitleFa", Link: "#" },
  { id: 6, name: "EducationStadyEn", Link: "#" },
  { id: 7, name: "EducationStadyDe", Link: "#" },
  { id: 8, name: "EducationStadyFa", Link: "#" },
  { id: 9, name: "EducationLocationEn", Link: "#" },
  { id: 10, name: "EducationLocationDe", Link: "#" },
  { id: 11, name: "EducationLocationFa", Link: "#" },
  { id: 12, name: "EducationDataEn", Link: "#" },
  { id: 13, name: "EducationDataDe", Link: "#" },
  { id: 14, name: "EducationDataFa", Link: "#" },
  { id: 15, name: "opartion", Link: "#" },
];
export const WorkHistory: AllsNavbars[] = [
  { id: 1, name: "colum", Link: "#" },
  { id: 2, name: "WorkHistoryLogo", Link: "#" },
  { id: 3, name: "WorkHistoryTitleEn", Link: "#" },
  { id: 4, name: "WorkHistoryTitleDe", Link: "#" },
  { id: 5, name: "WorkHistoryTitleFa", Link: "#" },
  { id: 6, name: "WorkHistoryLocationEn", Link: "#" },
  { id: 7, name: "WorkHistoryLocationDe", Link: "#" },
  { id: 8, name: "WorkHistoryLocationFa", Link: "#" },
  { id: 9, name: "WorkHistoryPositionEn", Link: "#" },
  { id: 10, name: "WorkHistoryPositionDe", Link: "#" },
  { id: 11, name: "WorkHistoryPositionFa", Link: "#" },
  { id: 12, name: "WorkHistoryDataEn", Link: "#" },
  { id: 13, name: "WorkHistoryDataDe", Link: "#" },
  { id: 14, name: "WorkHistoryDataFa", Link: "#" },
  { id: 15, name: "WorkHistoryLink", Link: "#" },
  { id: 16, name: "opartion", Link: "#" },
];
export const Programming: AllsNavbars[] = [
  { id: 1, name: "ProgrammingSkillsNumber", Link: "#" },
  { id: 2, name: "ProgrammingSkillsTitle", Link: "#" },
  { id: 3, name: "opartion", Link: "#" },
];

export const Projects: AllsNavbars[] = [
  { id: 1, name: "colum", Link: "#" },
  { id: 2, name: "ProjectLogo", Link: "#" },
  { id: 3, name: "ProjectTitleEn", Link: "#" },
  { id: 4, name: "ProjectTitleDe", Link: "#" },
  { id: 5, name: "ProjectTitleFa", Link: "#" },
  { id: 6, name: "ProjectsTochnologiesEn", Link: "#" },
  { id: 7, name: "ProjectsTochnologiesDe", Link: "#" },
  { id: 8, name: "ProjectsTochnologiesFa", Link: "#" },
  { id: 9, name: "ProjectsSummeryEn", Link: "#" },
  { id: 10, name: "ProjectsSummeryDe", Link: "#" },
  { id: 11, name: "ProjectsSummeryFa", Link: "#" },
  { id: 12, name: "ProjectsDataEn", Link: "#" },
  { id: 13, name: "ProjectsDataDe", Link: "#" },
  { id: 14, name: "ProjectsDataFa", Link: "#" },
  { id: 15, name: "ProjectsLink", Link: "#" },
  { id: 16, name: "opartion", Link: "#" },
];

export const FormInputProfile: FormInputArea[] = [
  { id: 1, name: "summaryEn", Title: "Summary", Code: "EN" },
  { id: 2, name: "summaryDE", Title: "Summary", Code: "DE" },
  { id: 3, name: "summaryFA", Title: "Summary", Code: "FA" },
];

export const FormInputAboutMe: FormInputArea[] = [
  { id: 1, name: "summaryEn", Title: "Summary", Code: "EN" },
  { id: 2, name: "summaryDE", Title: "Summary", Code: "DE" },
  { id: 3, name: "summaryFA", Title: "Summary", Code: "FA" },
];

export const FormInputAboutMeHighlights: FormInputArea[] = [
  { id: 1, name: "HighlightsEn", Title: "Highlights", Code: "EN" },
  { id: 2, name: "HighlightsDE", Title: "Highlights", Code: "DE" },
  { id: 3, name: "HighlightsFA", Title: "Highlights", Code: "FA" },
];

export const FormInputEducation: FormInputArea[] = [
  { id: 1, name: "EducationTitleEn", Title: "EducationTitle", Code: "EN" },
  { id: 2, name: "EducationTitleDe", Title: "EducationTitle", Code: "DE" },
  { id: 3, name: "EducationTitleFa", Title: "EducationTitle", Code: "FA" },
  { id: 4, name: "EducationStadyEn", Title: "EducationStady", Code: "EN" },
  { id: 5, name: "EducationStadyDe", Title: "EducationStady", Code: "DE" },
  { id: 6, name: "EducationStadyFa", Title: "EducationStady", Code: "FA" },
  {
    id: 7,
    name: "EducationLocationEn",
    Title: "EducationLocation",
    Code: "EN",
  },
  {
    id: 8,
    name: "EducationLocationDe",
    Title: "EducationLocation",
    Code: "DE",
  },
  {
    id: 9,
    name: "EducationLocationFa",
    Title: "EducationLocation",
    Code: "FA",
  },
  { id: 10, name: "EducationDataEn", Title: "EducationData", Code: "EN" },
  { id: 11, name: "EducationDataDe", Title: "EducationData", Code: "DE" },
  { id: 12, name: "EducationDataFa", Title: "EducationData", Code: "FA" },
];

export const FormInputWorkHistory: FormInputArea[] = [
  { id: 1, name: "WorkHistoryTitleEn", Title: "WorkHistoryTitle", Code: "EN" },
  { id: 2, name: "WorkHistoryTitleDe", Title: "WorkHistoryTitle", Code: "DE" },
  { id: 3, name: "WorkHistoryTitleFa", Title: "WorkHistoryTitle", Code: "FA" },
  {
    id: 4,
    name: "WorkHistoryLocationEn",
    Title: "WorkHistoryLocation",
    Code: "EN",
  },
  {
    id: 5,
    name: "WorkHistoryLocationDe",
    Title: "WorkHistoryLocation",
    Code: "DE",
  },
  {
    id: 6,
    name: "WorkHistoryLocationFa",
    Title: "WorkHistoryLocation",
    Code: "FA",
  },
  {
    id: 7,
    name: "WorkHistoryPositionEn",
    Title: "WorkHistoryPosition",
    Code: "EN",
  },
  {
    id: 8,
    name: "WorkHistoryPositionDe",
    Title: "WorkHistoryPosition",
    Code: "DE",
  },
  {
    id: 9,
    name: "WorkHistoryPositionFa",
    Title: "WorkHistoryPosition",
    Code: "FA",
  },
  { id: 10, name: "WorkHistoryDataEn", Title: "WorkHistoryData", Code: "EN" },
  { id: 11, name: "WorkHistoryDataDe", Title: "WorkHistoryData", Code: "DE" },
  { id: 12, name: "WorkHistoryDataFa", Title: "WorkHistoryData", Code: "FA" },
  { id: 13, name: "WorkHistoryLink", Title: "WorkHistoryLink", Code: "All" },
];

export const FormInputProject: FormInputArea[] = [
  { id: 1, name: "ProjectTitleEn", Title: "ProjectTitle", Code: "EN" },
  { id: 2, name: "ProjectTitleDe", Title: "ProjectTitle", Code: "DE" },
  { id: 3, name: "ProjectTitleFa", Title: "ProjectTitle", Code: "FA" },
  {
    id: 4,
    name: "ProjectsTochnologiesEn",
    Title: "ProjectsTochnologies",
    Code: "EN",
  },
  {
    id: 5,
    name: "ProjectsTochnologiesDe",
    Title: "ProjectsTochnologies",
    Code: "DE",
  },
  {
    id: 6,
    name: "ProjectsTochnologiesFa",
    Title: "ProjectsTochnologies",
    Code: "FA",
  },
  { id: 7, name: "ProjectsSummeryEn", Title: "ProjectsSummery", Code: "EN" },
  { id: 8, name: "ProjectsSummeryDe", Title: "ProjectsSummery", Code: "DE" },
  { id: 9, name: "ProjectsSummeryFa", Title: "ProjectsSummery", Code: "FA" },
  { id: 10, name: "ProjectsDataEn", Title: "ProjectsData", Code: "EN" },
  { id: 11, name: "ProjectsDataDe", Title: "ProjectsData", Code: "DE" },
  { id: 12, name: "ProjectsDataFa", Title: "ProjectsData", Code: "FA" },
  { id: 13, name: "ProjectsLink", Title: "ProjectsLink", Code: "All" },
];
