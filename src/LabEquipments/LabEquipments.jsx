import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LABEQUIPMENTS } from "./LabEquipments.config";

const LabEquipments = () => {
  const { labId } = useParams();
  const [labEquipments, setLabEquipments] = useState(null);
  const [showTwoImages, setShowTwoImages] = useState(true);

  const images = [
    labEquipments?.image,
    labEquipments?.image1,
    labEquipments?.image2,
  ];

  useEffect(() => {
    setLabEquipments(LABEQUIPMENTS.find(({ id }) => id === Number(labId)));
  }, [labId]);

  useEffect(() => {
    const navTabs = document.querySelectorAll("#nav-tab .nav-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    navTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        navTabs.forEach((tab) => tab.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("show", "active"));

        tab.classList.add("active");
        tabPanes[index].classList.add("show", "active");
      });
    });
  }, [labEquipments]);
  if (!labEquipments) {
    return <div>Loading...</div>;
  }
  return (
    <div className="main-container">
      LabEquipmetnts
      <div className="prod-container">
        {showTwoImages ? (
          <div className="labprodimage-container">
            {images.filter(Boolean).map((img, index) => (
              <img key={index} src={img} alt={`Image ${index + 1}`} />
            ))}
          </div>
        ) : (
          <div className="labprodimage-container">
            {labEquipments?.image1 && (
              <img src={labEquipments.image1} alt="" className="prodimage" />
            )}
          </div>
        )}

        <div className="proddetails-container">
          <h3 className="prodproduct-title">{labEquipments.name}</h3>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-description-tab"
                data-toggle="tab"
                href="#nav-description"
                role="tab"
                aria-controls="nav-description"
                aria-selected="true"
              >
                Description
              </a>
              {labEquipments.content && (
                <a
                  className="nav-item nav-link"
                  id="nav-content-tab"
                  data-toggle="tab"
                  href="#nav-content"
                  role="tab"
                  aria-controls="nav-content"
                  aria-selected="false"
                >
                  Content
                </a>
              )}
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-description"
              role="tabpanel"
              aria-labelledby="nav-description-tab"
            >
              <div id="prodtext-desc">{labEquipments.description}</div>
            </div>
            {labEquipments.content && (
              <div
                className="tab-pane fade"
                id="nav-content"
                role="tabpanel"
                aria-labelledby="nav-content-tab"
              >
                <div id="prodtext-desc">{labEquipments.content}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LabEquipments;
