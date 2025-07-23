import { useContext } from 'react'
import { Context } from '../Context/Context'

const StudentsList = () => {
    const { students, collectSavedStudents } = useContext(Context)
    return (
        <div className='flex containes justify-between gap-[20px] flex-wrap'>
            {students.map(item => (
                <div className='p-2 bg-white w-[300px] rounded-md'>
                    <img className='mb-3' src={item.img} alt="img" width={300} height={200}/>
                    <h2 className='font-semibold text-[20px] mb-2'>{item.name} - {item.surname}</h2>
                    <p className='font-semibold text-[18px]'>Yosh: {item.age}</p>
                    <p className='font-normal text-[18px]'>Manzil: {item.region} </p>
                    <button onClick={() => collectSavedStudents(item)} className='bg-[#000000] cursor-pointer w-full mt-2 p-2 rounded-md text-white font-semibold'>Saved</button>
                </div>
            ))}
        </div>
    )
}

export default StudentsList
