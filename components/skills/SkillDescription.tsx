import { motion } from 'motion/react';

interface ISkill {
  name: string;
}

interface IProps {
  skill: ISkill;
  Icon: React.ComponentType<{ className?: string }>;
  idx: number;
}

export default function SkillDescription({ skill, Icon, idx }: IProps) {
  return (
    <motion.div
      key={skill.name}
      drag
      className='border-grey-secondary z-10 flex h-[200px] w-[200px] flex-col items-center justify-end rounded-2xl border pb-4 transition-shadow hover:shadow-md'
      transition={{ duration: 0.3, delay: 0.1 * idx }}
      initial={{ opacity: 0, y: 10 }}
      whileDrag={{ scale: 1.1, boxShadow: '0px 10px 16px #01' }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Icon className='mb-6 h-[75px] w-[75px]' />
      <p className='font-roboto text-sm font-light tracking-[3px]'>
        {skill.name}
      </p>
    </motion.div>
  );
}
