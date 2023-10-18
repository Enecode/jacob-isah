import React from "react";
import "./Youtube.css";

const Youtube = () => {
    return (
        <div className="youtube-container">
            <div className="youtube-video">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/d6oyj9yrnOs?si=QnQjlI-JM4_gxT5m" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
                    allowfullscreen
                    >
                </iframe>
            </div>

            <div className="youtube-video">
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ppHxpOF4voA?si=IxZhj9fMlMK31lSq" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>

                </iframe>
            </div>

            <div className="youtube-video">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/FEGTzWQNEoE?si=UHgBul49g7oivIcS" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className="youtube-video">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/AeFPg4MDgJQ?si=j6hNy2Oy_nuMD99j" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className="youtube-video">
                <iframe 
                    width="560"
                    height="315" 
                    src="https://www.youtube.com/embed/sbP-Uj0z-VA?si=cse2OaSJJn39RKA1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    );
};

export default Youtube;

