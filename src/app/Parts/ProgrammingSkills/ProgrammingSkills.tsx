interface ProgrammingSkillsProps {
        ProgrammingSkillsTitle: any;
        size: any;
}

export default function ProgrammingSkills(props: ProgrammingSkillsProps) {
        return (
                <>
                        <div className="flex rounded-lg flex-col items-center pb-10">
                                <div className={`relative  h-40 w-40 flex items-center justify-center rounded-full before:content-[''] before:absolute before:h-36 before:w-36  before:rounded-full before:bg-black`} style={{"background":`conic-gradient(#ed3c57, ${props.size*3.6}deg, #ededed 0deg)`}}>
                                        <span className="relative text-xl font-semibold text-white">{props.ProgrammingSkillsTitle}</span>
                                </div>
                        </div>
                </>
        )
}
