interface ProgrammingSkillsProps {
        programmingSkillsTitle: string;
        size: string;
        id: number;
}

export default function ProgrammingSkills(props: ProgrammingSkillsProps) {
        return (
                <>
                        <div key={props.id} className="flex flex-col relative w-6/12 my-2">
                                <span className='text-base text-ligth-color-text dark:text-dark-color-text'>{props.programmingSkillsTitle}</span>
                                <div className="relative h-4 w-9/12 bg-ligth-color-text dark:bg-dark-color-text rounded-full">
                                        <div className="h-4 absolute bg-gray-900 dark:bg-gray-200 rounded-full ease-in duration-300 delay-300	" style={{ 'width': `${props.size}%` }} >
                                        </div>
                                </div>
                        </div>
                </>
        )
}
