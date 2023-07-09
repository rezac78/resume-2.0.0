import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
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
  { name: "Dashboard", href: "/Admin/dashboard", icon: HomeIcon, current: true },
    { name: "Profile", href: "/Admin/dashboard/Profile", icon: UsersIcon, current: false },
  //   { name: "Projects", href: "#", icon: FolderIcon, current: false },
  //   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  //   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  //   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

export const Profile: AllsNavbars[] = [
  { id: 1, name: "ProfileImage", Link: "#" },
  { id: 2, name: "LittleSamaritanEn", Link: "#" },
  { id: 3, name: "LittleSamaritanDE", Link: "#" },
  { id: 4, name: "LittleSamaritanFA", Link: "#" },
  { id: 5, name: "ResumepdfEn", Link: "#" },
  { id: 6, name: "ResumepdfFa", Link: "#" },
];
export const AboutMe: AllsNavbars[] = [
  { id: 1, name: "Samaritan", Link: "#" },
  { id: 2, name: "Highlights", Link: "#" },
  { id: 3, name: "AboutImage", Link: "#" },
];

export const Education: AllsNavbars[] = [
  { id: 1, name: "EducationTitle", Link: "#" },
  { id: 2, name: "EducationStady", Link: "#" },
  { id: 3, name: "EducationLocation", Link: "#" },
  { id: 4, name: "EducationData", Link: "#" },
];
export const WorkHistory: AllsNavbars[] = [
  { id: 1, name: "WorkHistoryTitle", Link: "#" },
  { id: 2, name: "WorkHistoryLocation", Link: "#" },
  { id: 3, name: "WorkHistoryPosition", Link: "#" },
  { id: 4, name: "WorkHistoryData", Link: "#" },
  { id: 5, name: "WorkHistoryLink", Link: "#" },
];
export const Programming: AllsNavbars[] = [
  { id: 1, name: "ProgrammingSkillsNumber", Link: "#" },
  { id: 2, name: "ProgrammingSkillsTitle", Link: "#" },
];

export const Projects: AllsNavbars[] = [
  { id: 1, name: "ProjectTitle", Link: "#" },
  { id: 2, name: "ProjectsTochnologies", Link: "#" },
  { id: 3, name: "ProjectsSummery", Link: "#" },
  { id: 4, name: "ProjectsData", Link: "#" },
  { id: 5, name: "ProjectsLink", Link: "#" },
];

export const FormInputProfile: FormInputArea[] = [
  { id: 1, name: "summaryEn",Title: "Summary",Code:"EN"},
  { id: 2, name: "summaryDE",Title: "Summary",Code:"DE"},
  { id: 3, name: "summaryFA",Title: "Summary",Code:"FA"},
];