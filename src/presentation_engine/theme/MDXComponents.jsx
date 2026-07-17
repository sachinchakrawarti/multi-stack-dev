import React from "react";


// Default Docusaurus components
import MDXComponents from "@theme-original/MDXComponents";


// Presentation Engine
import {

Deck,

Slide,

CodeBlock,

Footer,

ImageCard,

Note,

Quiz,

SectionSlide,

Table,

Timeline,

Tip,

TitleSlide,

TwoColumn,


DefaultLayout,

ImageLayout,

TitleLayout,

TwoColumnLayout


} from "@site/src/presentation_engine";



export default {


...MDXComponents,


// Presentation components

Deck,

Slide,

CodeBlock,

Footer,

ImageCard,

Note,

Quiz,

SectionSlide,

Table,

Timeline,

Tip,

TitleSlide,

TwoColumn,



// Layouts

DefaultLayout,

ImageLayout,

TitleLayout,

TwoColumnLayout


};