// components/public/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    area: string;
    lots: string;
    location: string;
    description: string[];
    tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     image,
                                                     title,
                                                     area,
                                                     lots,
                                                     location,
                                                     description,
                                                     tags,
                                                 }) => {
    return (
        <div className="w-full max-w-[1110px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg">
            {/* Ảnh */}
            <div className="w-full lg:w-1/2 relative h-[260px] lg:h-[662px]">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-700"
                />
            </div>

            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[300px]">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">{title}</h2>

                    <div className="space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
                        <p className="flex items-center gap-2">
                            <img src="/icons/edit/ruler.svg" alt="Diện tích" className="w-5 h-5" />
                            Diện tích: {area}
                        </p>
                        <p className="flex items-center gap-2">
                            <img src="/icons/menu/more_grid_big.svg" alt="Số lô" className="w-5 h-5" />
                            Số lô: {lots}
                        </p>
                        <p className="flex items-center gap-2">
                            <img src="/icons/navigation/map_pin.svg" alt="Địa chỉ" className="w-5 h-5" />
                            {location}
                        </p>
                    </div>

                    {description.map((para, idx) => (
                        <p key={idx} className={`text-gray-700 leading-relaxed text-sm sm:text-base ${idx > 0 ? "mt-3" : ""}`}>
                            {para}
                        </p>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                    {tags.map((tag, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 bg-blue-50 text-[#8E8E93] px-3 py-2 rounded-full text-sm hover:bg-blue-100 transition"
                        >
                            <img
                                src="/icons/interface/tag.svg"
                                alt="tag"
                                className="w-4 h-4"
                                style={{ color: "#0056A6" }}
                            />

                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
