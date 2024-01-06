import React from "react";
import AnimatedTextWord from "./AnimatedTextWord";
import FileUpload from "./FileUpload"

export default function Body () {
    return (
        <div className="h-full p-10 mx-auto flex flex-col gap-11 items-center justify-center">
            <AnimatedTextWord text="biosense" />
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>How does it work?</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
            <FileUpload />
            <button className="btn" onClick={sendData}>Submit Image</button>
        </div>
    )
}

async function sendData () {
    const fileInput = document.getElementById("dropzone-file").files[0];
    const formData = new FormData();
    formData.append('image', fileInput);

    try {
        const response = await fetch ("http://localhost:8080/api/home", {
            method: 'POST',
            body: formData,
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }
}