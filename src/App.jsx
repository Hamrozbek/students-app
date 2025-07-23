import { Toaster } from "react-hot-toast"
import StudentsList from "./modules/StudentsList"
import StudentsSaved from "./modules/StudentsSaved"

function App() {

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <StudentsSaved/>
      <StudentsList/>
    </div>
  )
}

export default App
