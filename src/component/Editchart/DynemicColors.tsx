import React, { useContext } from "react";
import ShapeBox from "./ShapeBox";
import { GlobalChartBg } from "../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart";

const DynemicColors = () => {
    const { colorValueArray, setcolorValueArray } = useContext(GlobalChartBg);

    
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
                            ClipPathData={"0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%"}
                            clicPathName="polygon"
                        />
                        <ShapeBox
                            ClipPathData={
                                "0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%"
                            }
                            clicPathName="polygon"
                        />
                        <ShapeBox ClipPathData={"50% 0%, 100% 50%, 50% 100%, 0% 50%"} clicPathName="polygon" />
                        <ShapeBox
                            ClipPathData={"50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%"}
                            clicPathName="polygon"
                        />
                        <ShapeBox
                            ClipPathData={"0% 0%, 100% 0%, 100% 100%, 76% 100%, 54% 100%, 0 100%, 0% 75%"}
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
