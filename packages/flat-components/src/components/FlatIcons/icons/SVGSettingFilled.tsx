import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGSettingFilled: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="flat-icon-fill-color"
                clipRule="evenodd"
                d="M12.5 4.289a1 1 0 0 0-1 0L5.573 7.71a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l5.929 3.422a1 1 0 0 0 1 0l5.928-3.422a1 1 0 0 0 .5-.866V8.577a1 1 0 0 0-.5-.866L12.5 4.29ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                fill="#3381FF"
                fillRule="evenodd"
            />
            <path
                className="flat-icon-fill-color"
                d="m11.5 4.289.313.541-.313-.541Zm1 0 .313-.542-.313.542ZM5.573 7.71l.313.542-.313-.542Zm0 8.578.313-.542-.313.542Zm5.929 3.422-.313.542.313-.542Zm1 0 .312.542-.313-.542Zm5.928-3.422.312.541-.312-.541Zm0-8.578.312-.54-.312.54Zm-6.617-2.88a.375.375 0 0 1 .375 0l.625-1.083a1.625 1.625 0 0 0-1.625 0l.625 1.083ZM5.885 8.253l5.928-3.423-.625-1.083L5.26 7.17l.625 1.083Zm-.188.324c0-.134.072-.257.188-.324L5.26 7.17c-.503.29-.813.827-.813 1.407h1.25Zm0 6.846V8.577h-1.25v6.846h1.25Zm.188.325a.375.375 0 0 1-.188-.325h-1.25c0 .58.31 1.117.813 1.407l.625-1.082Zm5.928 3.422-5.928-3.423-.625 1.083 5.928 3.423.625-1.083Zm.375 0a.375.375 0 0 1-.375 0l-.625 1.083c.503.29 1.122.29 1.625 0l-.625-1.083Zm5.928-3.423-5.928 3.423.625 1.083 5.928-3.423-.625-1.082Zm.188-.324a.375.375 0 0 1-.188.325l.625 1.082c.503-.29.813-.827.813-1.407h-1.25Zm0-6.846v6.846h1.25V8.577h-1.25Zm-.188-.324c.116.067.188.19.188.324h1.25c0-.58-.31-1.117-.813-1.407l-.625 1.083ZM12.188 4.83l5.928 3.423.625-1.083-5.928-3.423-.625 1.083ZM14.376 12A2.375 2.375 0 0 1 12 14.375v1.25A3.625 3.625 0 0 0 15.626 12h-1.25ZM12 9.625A2.375 2.375 0 0 1 14.376 12h1.25A3.625 3.625 0 0 0 12 8.375v1.25ZM9.625 12a2.375 2.375 0 0 1 2.376-2.375v-1.25A3.625 3.625 0 0 0 8.375 12h1.25Zm2.376 2.375A2.375 2.375 0 0 1 9.625 12h-1.25a3.625 3.625 0 0 0 3.626 3.625v-1.25Z"
                fill="#3381FF"
            />
        </svg>
    );
};

export default SVGSettingFilled;
