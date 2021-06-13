import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'

export const style = restyler(() => {

  return {
    Delete: css`
      margin: 0;
      user-select: none;
      padding: 9px 15px;
      border-radius: 0 3px 3px 0;
      background-color: rgba(46, 46, 46, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(200, 0, 0, 1);
      }
    `,
    InactiveDelete: css`
    margin: 0;
    user-select: none;
    padding: 9px 15px;
    border-radius: 0 3px 3px 0;
    background-color: rgba(46, 46, 46, 0.5);
    backdrop-filter: blur(5px);
    transition: background-color .2s ease;
    :hover, :focus {
      transition: background-color .2s ease;
      background-color: rgba(200, 0, 0, 0.5);
    }
  `,

    Task: css`
      display: flex;
      cursor: pointer;
      margin: 4px 0;
      width: 100%;
      height: 45px;
      align-items: center;

      @media screen and (max-width: 1000px) {
        height: 40px;
      }

      @media screen and (max-width: 600px) {
        height: 38px;
      }
    `,

    TaskElement: css`
      margin: 0;
      padding: 9px 10px;
      width: 100%;
      border-radius: 3px 0 0 3px;
      background-color: rgba(36, 36, 36, 1);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      user-select: none;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 1);
      }
    `,

    InactiveTaskElement: css`
      text-decoration:line-through;
      margin: 0;
      padding: 9px 10px;
      width: 100%;
      user-select: none;
      border-radius: 3px 0 0 3px;
      backdrop-filter: blur(5px);
      background-color: rgba(36, 36, 36, 0.35);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 0.35);
      }
    `,
  }
})