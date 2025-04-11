"use client"

import React, {ReactNode} from 'react';
import {Toaster} from "@workspace/ui/components/toaster";

const ToasterProvider = ({children}:{children:ReactNode}) => {
  return (
    <>
      <Toaster/>
      {children}
    </>
  );
};

export default ToasterProvider;