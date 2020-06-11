import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledNoteEditorTextArea } from 'components/NoteNameEditor/NoteNameEditorStyles';

export class NotesDetailsComponent extends Component {
  render() {
    return (
      <p
        style={{
          background: 'white',
          width: '200px',
          height: '200px',
          position: 'absolute',
          zIndex: '10000',
          top: '0',
          left: '0',
        }}>
        <StyledNoteEditorTextArea onChange={() => {}} value={'asdf'} />
      </p>
    );
  }
}
