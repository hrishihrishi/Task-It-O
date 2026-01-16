export default function Modal({handleClose}){
    return(
        <div className="bg-blue-100 p-5 inline-block rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="text-xl text-center">Edit Task</h2>
            <input type="text" className="input bg-amber-50" placeholder="Task Name"
            onChange={(e)=>console.log(e.target.value)}
            />
            <button className="btn-primary">Edit</button>
            <button className="btn-primary" onClick={handleClose}>Close</button>
        </div>
    )
}