import "./form-css.css";
import { Stack, TextField, Box } from "@mui/material";
import * as React from "react";
import { Search, DraftingCompass } from "lucide-react";

const PlacesForm = ({ expanded }: { expanded: boolean }) => {
  return (
    <div className="grid gap-5 md:px-6 seachForm">
      <div className={`wrap flex items-center`}>
        <div className="icon flex justify-center items-center w-[24px] h-[24px]">
          <Search width="19" height="19" />
        </div>

        <div
          className={`entryarea transition-all ${
            expanded
              ? "w-[17rem] visible opacity-100 ml-3"
              : "w-0 invisible opacity-0"
          }`}
        >
          <input
            className="location-input "
            placeholder=" "
            type="text"
            id="latitude"
            required
          />
          <label htmlFor="latitude" className="labelline whitespace-nowrap">
            Location
          </label>
        </div>
      </div>

      <div className="latlong-container gap-3">
        <div className="wrap flex">
          <div className="icon flex justify-center items-center w-[24px] h-[24px]">
            <DraftingCompass width="19" height="19" />
          </div>

          <div
            className={`wrap grid grid-cols-2 transition-all gap-2 ${
              expanded
                ? "w-[17rem] visible opacity-100 ml-3"
                : "w-0 invisible opacity-0"
            }`}
          >
            <div className="entryarea">
              <input
                className="location-input "
                placeholder=" "
                type="text"
                id="latitude"
                required
              />
              <label htmlFor="latitude" className="labelline whitespace-nowrap">
                Latitude
              </label>
            </div>
            <div className="entryarea">
              <input
                className="location-input"
                placeholder=" "
                type="text"
                id="longitude"
                required
              />
              <label
                htmlFor="longitude"
                className="labelline whitespace-nowrap"
              >
                Longitude
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesForm;
