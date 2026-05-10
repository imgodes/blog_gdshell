import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { Stepper, Step } from '@site/src/components/Stepper';
import AboutPopover from '@site/src/components/AboutPopover';
import Figure from '@site/src/components/Figure';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';
import ImageOnClick  from '@site/src/components/ImageOnClick';
import Timeline from '@site/src/components/Timeline';
import TimelineItem from '@site/src/components/Timeline/TimelineItem';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';

export default {
  ...MDXComponents,
  Stepper,
  Step,
  AboutPopover,
  Figure,
  Columns,
  Column,
  ImageOnClick,
  Timeline,
  TimelineItem,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardImage,
};
