import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 439:219 */
export const Frame2: FC<Props> = memo(function Frame2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.desktop1}>
        <div className={classes.cB0C9E4376334D0EB212E6FCB4277A}></div>
        <div className={classes.aE37D9B5C254A9EB1518404F675976}></div>
        <div className={classes.cOMINGSOON}>COMING SOON ...</div>
      </div>
    </div>
  );
});
