import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ResizableComponent from "./ParentItems";

import { Box } from "@chakra-ui/react";
const ResponsiveGridLayout = WidthProvider(Responsive);
const ParentComponent = () => {
  const getLayoutsFromSomewhere = () => {
    return {
      lg: [
        { i: "1", x: 0, y: 0, w: 1, h: 2 },
        { i: "2", x: 1, y: 0, w: 1, h: 2 },
        { i: "3", x: 2, y: 0, w: 1, h: 2 },
      ],
      md: [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 1, y: 0, w: 1, h: 1 },
        { i: "3", x: 0, y: 2, w: 1, h: 1 },
      ],
      sm: [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 2, y: 0, w: 1, h: 1 },
        { i: "3", x: 0, y: 1, w: 1, h: 1 },
      ],
      xs: [
        { i: "1", x: 0, y: 0, w: 2, h: 1 },
        { i: "2", x: 0, y: 1, w: 2, h: 1 },
        { i: "3", x: 0, y: 2, w: 2, h: 1 },
      ],
    };
  };
  const [layouts, setLayouts] = useState(getLayoutsFromSomewhere());

 

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      isResizable={true}
      resizeHandles={["se", "ne", "sw", "nw", "e", "w", "n", "s"]}
      breakpoints={{ lg: 800, md: 699, sm: 450, xs: 400, xxs: 0 }}
      cols={{ lg: 3, md: 2, sm: 2, xs: 2, xxs: 2 }}
      
    >
      <Box key="1"  background={"white"}>
        <ResizableComponent
          image={
            "https://www.gettyimages.ca/gi-resources/images/500px/983794168.jpg"
          }
        />
      </Box>
      <Box key="2" background={"white"}>
        <ResizableComponent
          image={
            "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
          }
        />
      </Box>
      <Box key="3"  background={"white"}>
        <ResizableComponent
          image={
            "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          }
        />
      </Box>
      
    </ResponsiveGridLayout>
  );
};

export default ParentComponent;