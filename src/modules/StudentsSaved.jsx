import { useContext } from "react"
import { Context } from "../Context/Context"

const StudentsSaved = () => {
  const { savedList, handleShowSavedStudents } = useContext(Context)
  return (
    <div className="pt-5 md:pl-10 md:mx-0 mx-auto w-[160px] md:w-[300px]">
      <h1 className="text-white font-bold text-[25px] md:text-[30px] md:text-start text-center pb-2">Student App</h1>
      <button onClick={() => handleShowSavedStudents()} className="bg-white p-2 font-semibold cursor-pointer rounded-md">Saved Students ({savedList.length})</button>
    </div>
  )
}

export default StudentsSaved
