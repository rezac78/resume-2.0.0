import * as yup from "yup";

export const SchemaFormEn = yup.object({
        user_name: yup.string().required("It cannot be empty"),
        user_email: yup.string().email().required("It cannot be empty"),
        message: yup.string().required("It cannot be empty"),
});
export const SchemaFormDe = yup.object({
        user_name: yup.string().required("darf nicht leer sein"),
        user_email: yup.string().email().required("darf nicht leer sein"),
        message: yup.string().required("darf nicht leer sein"),
});
export const SchemaFormFa = yup.object({
        user_name: yup.string().required("نمی شود خالی باشد"),
        user_email: yup.string().email().required("نمی شود خالی باشد"),
        message: yup.string().required("نمی شود خالی باشد"),
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
        EducationTitleEn: yup.string().min(10, "تعداد کاراکتر ها نباید کمتر از 10 تا باشد").max(25, "تعداد باید بیشتر از 25 باشد"),
        EducationTitleDe: yup.string().min(10, "تعداد کاراکتر ها نباید کمتر از 10 تا باشد").max(35, "تعداد باید بیشتر از 35 باشد"),
        EducationTitleFa: yup.string().min(10, "تعداد کاراکتر ها نباید کمتر از 10 تا باشد").max(25, "تعداد باید بیشتر از 25 باشد"),
        EducationStadyEn: yup.string().min(15, "تعداد کاراکتر ها نباید کمتر از 15 باشد").max(40, "تعداد نباید بیشتر از 40 باشد"),
        EducationStadyDe: yup.string().min(15, "تعداد کاراکتر ها نباید کمتر از 15 باشد").max(50, "تعداد نباید بیشتر از 50 باشد"),
        EducationStadyFa: yup.string().min(15, "تعداد کاراکتر ها نباید کمتر از 15 باشد").max(40, "تعداد نباید بیشتر از 40 باشد"),
        EducationLocationEn: yup.string().min(5, "تعداد کاراکتر ها نباید کمتر از 5 باشد").max(20, "تعداد نباید بیشتر از 20 باشد"),
        EducationLocationDe: yup.string().min(5, "تعداد کاراکتر ها نباید کمتر از 5 باشد").max(30, "تعداد نباید بیشتر از 30 باشد"),
        EducationLocationFa: yup.string().min(5, "تعداد کاراکتر ها نباید کمتر از 5 باشد").max(20, "تعداد نباید بیشتر از 20 باشد"),
        EducationDataEn: yup.string().required("نباید خالی باشد"),
        EducationDataDe: yup.string().required("نباید خالی باشد"),
        EducationDataFa: yup.string().required("نباید خالی باشد"),
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
        WorkHistoryTitleEn: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(20, "تعداد کاراکتر نباید بیشتر از 20 باشد"),
        WorkHistoryTitleDe: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(40, "تعداد کاراکتر نباید بیشتر از 40 باشد"),
        WorkHistoryTitleFa: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryLocationEn: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryLocationDe: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(40, "تعداد کاراکتر نباید بیشتر از 40 باشد"),
        WorkHistoryLocationFa: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryPositionEn: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryPositionDe: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(40, "تعداد کاراکتر نباید بیشتر از 40 باشد"),
        WorkHistoryPositionFa: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryDataEn: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryDataDe: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(40, "تعداد کاراکتر نباید بیشتر از 40 باشد"),
        WorkHistoryDataFa: yup.string().min(5, "تعداد کاراکتر نباید کمتر از 5 باشد").max(30, "تعداد کاراکتر نباید بیشتر از 30 باشد"),
        WorkHistoryLink: yup.string().required("نباید خالی باشد"),
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
        ProjectTitleEn: yup.string().min(5,"نباید کمتر از 5 کاراکتر باشد").max(20,"نباید بیشتر از 20 کاراکتر باشد"),
        ProjectTitleDe: yup.string().min(5,"نباید کمتر از 5 کاراکتر باشد").max(30,"نباید بیشتر از 30 کاراکتر باشد"),
        ProjectTitleFa: yup.string().min(5,"نباید کمتر از 5 کاراکتر باشد").max(20,"نباید بیشتر از 20 کاراکتر باشد"),
        ProjectsTochnologiesEn: yup.string().min(2,"نباید کمتر از 2 کاراکتر باشد").max(50,"نباید بیشتر از 50 کاراکتر باشد"),
        ProjectsTochnologiesDe: yup.string().min(2,"نباید کمتر از 2 کاراکتر باشد").max(65,"نباید بیشتر از 65 کاراکتر باشد"),
        ProjectsTochnologiesFa: yup.string().min(2,"نباید کمتر از 2 کاراکتر باشد").max(50,"نباید بیشتر از 50 کاراکتر باشد"),
        ProjectsSummeryEn: yup.string().min(3,"نباید کمتر از 3 کاراکتر باشد").max(70,"نباید بیشتر از 70 کاراکتر باشد"),
        ProjectsSummeryDe: yup.string().min(3,"نباید کمتر از 3 کاراکتر باشد").max(85,"نباید بیشتر از 85 کاراکتر باشد"),
        ProjectsSummeryFa: yup.string().min(3,"نباید کمتر از 3 کاراکتر باشد").max(70,"نباید بیشتر از 70 کاراکتر باشد"),
        ProjectsDataEn: yup.string().required("نباید خالی باشد"),
        ProjectsDataDe: yup.string().required("نباید خالی باشد"),
        ProjectsDataFa: yup.string().required("نباید خالی باشد"),
        ProjectsLink: yup.string().required("نباید خالی باشد"),
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