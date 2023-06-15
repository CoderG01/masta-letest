import React, { useContext } from "react";
import ShapeBox from "./ShapeBox";
import { GlobalChartBg } from "../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart";
import { selectChartData } from "../../store/slices/chartDataSlice";
import { useAppSelector } from "../../store/hooks";

interface DynemicColorsProps {
    colorValueArray: any;
    setcolorValueArray: React.Dispatch<any>;
}

const DynemicColors = ({ colorValueArray, setcolorValueArray }: DynemicColorsProps) => {
    const handleColorChange = (e: any, i: any) => {
        const label = i;
        const value = e.target.value;
        colorValueArray[label] = value;
        setcolorValueArray(() => [...colorValueArray]);
    };

    return (
        <React.Fragment>
            <div className="colorContent">
                {/* <SearchBar pname={'Search by colour or code'}/> */}
                <div className="mt-1 py-3 px-2">
                    <p className="mt-3 px-3">Document Colours</p>
                    <div className="colorWrapper py-2 d-flex flex-wrap gap-4 pb-4 px-3">
                        {colorValueArray.map((value: any, i: number) => {
                            return (
                                <input
                                    type="color"
                                    key={i}
                                    value={value}
                                    onChange={(e) => {
                                        handleColorChange(e, i);
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="py-2 px-2">
                    <p className="mt-1 px-3">Canvas Shape</p>
                    <div className="colorWrapper d-flex flex-wrap gap-4 pb-4 px-3 pt-3">
                        <ShapeBox
                            ClipPathData={"25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%"}
                            clicPathName="polygon"
                        />
                        <ShapeBox
                            ClipPathData={
                                "50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%"
                            }
                            clicPathName="polygon"
                        />
                        <ShapeBox
                            ClipPathData={
                                "0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%"
                            }
                            clicPathName="polygon"
                        />
                        <ShapeBox ClipPathData={"10% 0, 89% 0, 100% 100%, 0% 100%"} clicPathName="polygon" />
                        <ShapeBox
                            ClipPathData={"50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%"}
                            clicPathName="polygon"
                        />
                        <ShapeBox
                            ClipPathData={"20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%"}
                            clicPathName="polygon"
                        />
                    </div>
                </div>

                <p className="mt-3 px-3 cursorPointer">+ Add your brand colours</p>
            </div>
        </React.Fragment>
    );
};
export default DynemicColors;
