import React from "react";
import {createRoot} from "react-dom/client";

import "$/styles/globals.css";
import Menu from "$/components/menu/Menu";

const $root = document.getElementById("root");
if ($root === null) throw "Can't get root";

const root = createRoot($root);

root.render(
    <React.StrictMode>
        <Menu/>
    </React.StrictMode>
);