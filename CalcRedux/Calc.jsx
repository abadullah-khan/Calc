import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  btnClkHandle,
  inputChangeHandle,
  resultHandle,
  backSpaceHandle,
  calcState,
} from "./Slice/calcSlice";
// import { btnClkHandle } from "./Slice/calcSlice";

const Container = styled.div`
  width: 300px;

  background-color: black;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  padding: 7px;
  transition: all 0.5s ease;

  &:hover {
    filter: invert(1);
  }
`;
const InputTxt = styled.input`
  height: 50px;

  padding: 10px;
  font-size: 25px;
  text-align: end;
  &:focus {
    filter: invert(1);
  }
`;
const Span = styled.span`
  color: #d0ff00;
  border: 2px solid yellow;
  text-align: center;
  align-self: flex-end;
  padding: 0px 15px;
  margin: 5px 10px 5px 0px;
`;
const BtnContainer = styled.div`
  display: flex;
`;
const ValueContainer = styled.div`
  flex: 3;
`;
const OpContainer = styled.div`
  flex: 0.5;
`;
const Button = styled.button`
  /* width: ${(props) => props.w}; */
  /* height: ${(props) => props.h}; */
  font-size: 40px;
  padding: ${(props) => props.pV} ${(props) => props.pH};
  /* text-align: center; */
  /* justify-content: center; */
  &:hover {
    filter: invert(1);
    text-shadow: 5px 5px 5px black;
  }
`;

export const Calc = () => {
  const dispatch = useDispatch();
  const { inputtedVal } = useSelector(calcState);
  return (
    <>
      <Container>
        <InputTxt
          type="text"
          value={inputtedVal}
          onChange={(e) =>
            dispatch(inputChangeHandle({ value: e.target.value }))
          }
          onKeyPress={(e) =>
            e.code === "Enter" ? dispatch(resultHandle()) : null
          }
        />
        <Span onClick={() => dispatch(backSpaceHandle())}>C</Span>

        <BtnContainer>
          <ValueContainer>
            <Button
              pV="15px"
              pH="25px"
              name="1"
              value="1"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              1
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="2"
              value="2"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              2
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="3"
              value="3"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              3
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="4"
              value="4"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              4
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="5"
              value="5"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              5
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="6"
              value="6"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              6
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="7"
              value="7"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              7
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="8"
              value="8"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              8
            </Button>
            <Button
              pV="15px"
              pH="25px"
              name="9"
              value="9"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              9
            </Button>
            <Button
              pV="15px"
              pH="63.5px"
              name="0"
              value="0"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              0
            </Button>
            <Button
              pV="15px"
              pH="30px"
              name="."
              value="."
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              .
            </Button>
          </ValueContainer>
          <OpContainer>
            <Button
              pV="7px"
              pH="20px"
              name="="
              value="="
              onClick={(e) => dispatch(resultHandle())}
            >
              =
            </Button>
            <Button
              pV="7px"
              pH="20px"
              name="+"
              value="+"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              +
            </Button>
            <Button
              pV="7px"
              pH="25px"
              name="-"
              value="-"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              -
            </Button>
            <Button
              pV="7px"
              pH="26px"
              name="/"
              value="/"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              /
            </Button>
            <Button
              pV="7px"
              pH="24px"
              name="*"
              value="*"
              onClick={(e) =>
                dispatch(
                  btnClkHandle({ value: e.target.value, key: e.target.name })
                )
              }
            >
              *
            </Button>
          </OpContainer>
        </BtnContainer>
      </Container>
    </>
  );
};
