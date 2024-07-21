import css from './chart.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '@/utils/data'
import StatisticsChart from './statisticschart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <h1 className=' font-poppins text-[16px] font-semibold'>Wellbeing Analysis  </h1>
            <StatisticsChart/>
        </div>
    )
}

export default Statistics