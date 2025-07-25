import { children, createContext, useState } from "react";
import toast from "react-hot-toast";

export const Context = createContext()

export const GlobalContext = ({ children }) => {
    const list = [
        { id: 1, name: "Jamshid", surname: "Akramov", age: 20, region: "Qoqon", img: "https://picsum.photos/id/1/800/800" },
        { id: 2, name: "Hamroz", surname: "Nuriddinov", age: 19, region: "Samarqand", img: "https://picsum.photos/id/2/800/800" },
        { id: 3, name: "Sarvar", surname: "A'zamov", age: 18, region: "Surxondaryo", img: "https://picsum.photos/id/3/800/800" },
        { id: 4, name: "Ibrohimjon", surname: "Shukurullayev", age: 18, region: "Toshkent", img: "https://picsum.photos/id/4/800/800" },
        { id: 5, name: "Ulug'bek", surname: "Raxmatullayev", age: 20, region: "Toshkent", img: "https://picsum.photos/id/5/800/800" },
        { id: 6, name: "Ulug'bek", surname: "Jo'rayev", age: 15, region: "Toshkent", img: "https://picsum.photos/id/6/800/800" },
        { id: 7, name: "Dilnoza", surname: "Rahmatullayeva", age: 17, region: "Qashqadaryo", img: "https://picsum.photos/id/7/800/800" },
        { id: 8, name: "Muslima", surname: "Yoqubova", age: 16, region: "Toshkent", img: "https://picsum.photos/id/8/800/800" },
        { id: 9, name: "Laylo", surname: "Ismatullayeva", age: 16, region: "Toshkent", img: "https://picsum.photos/id/9/800/800" },
        { id: 10, name: "Nigora", surname: "Xasanova", age: 19, region: "Toshkent", img: "https://picsum.photos/id/10/800/800" },
        { id: 11, name: "Abdulloh", surname: "Sultonmurodov", age: 26, region: "Toshkent", img: "https://picsum.photos/id/11/800/800" },
        { id: 12, name: "Muhammadali", surname: "Rustambekov", age: 17, region: "Toshkent", img: "https://picsum.photos/id/12/800/800" },
        { id: 13, name: "Raxmatulloh", surname: "Raxmatov", age: 14, region: "Toshkent", img: "https://picsum.photos/id/13/800/800" },
        { id: 14, name: "Abduvahob", surname: "Mirzaaxmedov", age: 19, region: "Toshkent", img: "https://picsum.photos/id/14/800/800" },
        { id: 15, name: "Mirzohamdam", surname: "To'lqinov", age: 19, region: "Toshkent", img: "https://picsum.photos/id/15/800/800" },
    ]
    const [savedList, setSavedList] = useState([])
    const [students, setStudents] = useState(list)

    function collectSavedStudents(item){
        setSavedList([...savedList, item])
        toast.success("Student Saved!")
    }

    function handleShowSavedStudents(){
        if(students.length == savedList.length){
            setStudents(list)
        }else{
            setStudents(savedList)
        }
    }
    return(
        <Context.Provider value={{students, collectSavedStudents, savedList, handleShowSavedStudents}}>
            {children}
        </Context.Provider>
    )
}