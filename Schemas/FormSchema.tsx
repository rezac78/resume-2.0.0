import * as yup from "yup";

export const SchemaForm = yup.object({
        user_name: yup.string().required("نمی شود خالی باشد  It cannot be empty Es darf nicht leer sein"),
        user_email: yup.string().email().required("نمی شود خالی باشد It cannot be empty Es darf nicht leer sein"),
        message: yup.string().required("نمی شود خالی باشد It cannot be empty Es darf nicht leer sein"),
});
export const SchemaLogin = yup.object({
        email: yup.string().required("نمی شود خالی باشد  It cannot be empty Es darf nicht leer sein"),
        password: yup.string().required("نمی شود خالی باشد It cannot be empty Es darf nicht leer sein"),
});

export const SchemaProfile = yup.object({
        img: yup.string(),
        FileFa: yup.string(),
        FileEn: yup.string(),
        summaryEn: yup.string(),
        summaryDE: yup.string(),
        summaryFA: yup.string(),
});

export const SchemaAboutMe = yup.object({
        img: yup.string(),
        summaryEn: yup.string(),
        summaryDE: yup.string(),
        summaryFA: yup.string(),
        HighlightsEn: yup.array(),
        HighlightsDE: yup.array(),
        HighlightsFA: yup.array(),
});
export const SchemaAddEducation = yup.object({
        EducationTitleEn: yup.string(),
        EducationTitleDe: yup.string(),
        EducationTitleFa: yup.string(),
        EducationStadyEn: yup.string(),
        EducationStadyDe: yup.string(),
        EducationStadyFa: yup.string(),
        EducationLocationEn: yup.string(),
        EducationLocationDe: yup.string(),
        EducationLocationFa: yup.string(),
        EducationDataEn: yup.string(),
        EducationDataDe: yup.string(),
        EducationDataFa: yup.string(),
});
export const SchemaEditEducation = yup.object({
        EducationTitleEn: yup.string(),
        EducationTitleDe: yup.string(),
        EducationTitleFa: yup.string(),
        EducationStadyEn: yup.string(),
        EducationStadyDe: yup.string(),
        EducationStadyFa: yup.string(),
        EducationLocationEn: yup.string(),
        EducationLocationDe: yup.string(),
        EducationLocationFa: yup.string(),
        EducationDataEn: yup.string(),
        EducationDataDe: yup.string(),
        EducationDataFa: yup.string(),
});

export const SchemaAddWorkHistory = yup.object({
        WorkHistoryTitleEn: yup.string(),
        WorkHistoryTitleDe: yup.string(),
        WorkHistoryTitleFa: yup.string(),
        WorkHistoryLocationEn: yup.string(),
        WorkHistoryLocationDe: yup.string(),
        WorkHistoryLocationFa: yup.string(),
        WorkHistoryPositionEn: yup.string(),
        WorkHistoryPositionDe: yup.string(),
        WorkHistoryPositionFa: yup.string(),
        WorkHistoryDataEn: yup.string(),
        WorkHistoryDataDe: yup.string(),
        WorkHistoryDataFa: yup.string(),
        WorkHistoryLink: yup.string(),
        img: yup.string(),
});
export const SchemaEditWorkHistory = yup.object({
        WorkHistoryTitleEn: yup.string(),
        WorkHistoryTitleDe: yup.string(),
        WorkHistoryTitleFa: yup.string(),
        WorkHistoryLocationEn: yup.string(),
        WorkHistoryLocationDe: yup.string(),
        WorkHistoryLocationFa: yup.string(),
        WorkHistoryPositionEn: yup.string(),
        WorkHistoryPositionDe: yup.string(),
        WorkHistoryPositionFa: yup.string(),
        WorkHistoryDataEn: yup.string(),
        WorkHistoryDataDe: yup.string(),
        WorkHistoryDataFa: yup.string(),
        WorkHistoryLink: yup.string(),
        img: yup.string(),
});

export const SchemaAddProgrammingSkills = yup.object({
        ProgrammingSkillsTitle: yup.array(),
        ProgrammingSkillsNumber: yup.array(),
});

export const SchemaAddProject = yup.object({
        ProjectTitleEn: yup.string(),
        ProjectTitleDe: yup.string(),
        ProjectTitleFa: yup.string(),
        ProjectsTochnologiesEn: yup.string(),
        ProjectsTochnologiesDe: yup.string(),
        ProjectsTochnologiesFa: yup.string(),
        ProjectsSummeryEn: yup.string(),
        ProjectsSummeryDe: yup.string(),
        ProjectsSummeryFa: yup.string(),
        ProjectsDataEn: yup.string(),
        ProjectsDataDe: yup.string(),
        ProjectsDataFa: yup.string(),
        ProjectsLink: yup.string(),
});
export const SchemaEditProject = yup.object({
        ProjectTitleEn: yup.string(),
        ProjectTitleDe: yup.string(),
        ProjectTitleFa: yup.string(),
        ProjectsTochnologiesEn: yup.string(),
        ProjectsTochnologiesDe: yup.string(),
        ProjectsTochnologiesFa: yup.string(),
        ProjectsSummeryEn: yup.string(),
        ProjectsSummeryDe: yup.string(),
        ProjectsSummeryFa: yup.string(),
        ProjectsDataEn: yup.string(),
        ProjectsDataDe: yup.string(),
        ProjectsDataFa: yup.string(),
        ProjectsLink: yup.string(),
});