import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layout/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout, {
      content: (<ResolutionsWrapper/>)
    })
  }
});
