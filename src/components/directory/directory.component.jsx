import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { connect } from 'react-redux';
import './directory.styles.scss';

const Directory =({sections})=>(
  
      <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps})=>(<MenuItem key={id} {...otherSectionProps} />))}
        </div>
    
  
)
// line 51 laatste stuk is gewoon deconstructuring van die props van MenuItem

const mapStateToProps=createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
