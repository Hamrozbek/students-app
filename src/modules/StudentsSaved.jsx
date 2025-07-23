import { useContext } from "react"
import { Context } from "../Context/Context"

const StudentsSaved = () => {
  const {savedList, handleShowSavedStudents} = useContext(Context)
  return (
    <div className="pt-5 pl-10">
        <button onClick={() => handleShowSavedStudents()} className="bg-white p-2 font-semibold cursor-pointer rounded-md">Saved Students ({savedList.length})</button>
    </div>
  )
}

export default StudentsSaved
