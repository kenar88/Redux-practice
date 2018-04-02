import React, {Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class PopupIpTargeting extends Component {

    componentDidMount () {
        document.addEventListener('keydown', (e) => {
          if (e.keyCode === 27) {
            this.props.esc();
          }
        });
      }

    componentDidUpdate () {
        let scrollfade = this.scrollfade;
        if ( this.popupBody.clientHeight === 0 ) {
            scrollfade.style.display = 'block';
            this.close.classList.add('-fixed');            
        } else if ( this.popupBody.clientHeight === this.popupBody.scrollHeight ) {
            scrollfade.style.display = 'none';
            this.close.style = '';
            this.close.classList.remove('-fixed');
        } else if ( this.popupBody.clientHeight <this.popupBody.scrollHeight ) {
            let rightIndent = ((this.popupBody.clientWidth / 2) - 20);
            let topIndent = (this.popupBody.offsetTop + 20);
            this.close.style = `right: calc(50% - ${rightIndent}px); top: ${topIndent}px;`;
            this.close.classList.add('-fixed');
        }

    }

    handleScroll = (e) => {
        this.scrollfade.style.display = 'none';
        if ( this.popupBody.scrollTop ) {
            this.close.classList.add('-bordered');
        } else if (  this.popupBody.scrollTop === 0 ) {
            this.close.classList.remove('-bordered');
        }
    }

    render () {
        return (
           <div ref={popupCont => this.popupContainer = popupCont}
                id={this.props.id}
                className={classNames('popup', this.props.className, this.props.type, { '-visible': this.props.open })}>
                <div className='popup__background' onClick={this.props.close}></div>
                <div className='popup__body'
                     ref={popupBody => this.popupBody = popupBody}
                     onScroll={this.handleScroll}>
                    <div ref={scrollfade => this.scrollfade = scrollfade} className='popup__scrollfade-y'></div>
                    <h2 id='popupHeader' className='popup__heading'>{this.props.title}</h2>
                    <div id='close' ref={close => this.close = close}
                         className='popup__close close'
                         onClick={this.props.close}></div>
                    {this.props.children}
                </div>
           </div>
        );
    }
}

export default PopupIpTargeting;
