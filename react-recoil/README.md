    recoil tutorial

    npm i recoil

    const todoListState = atom({
      key: 'todoListState',
      default: [],
    });

    const todoList = useRecoilValue(todoListState); // 읽기

    const setTodoList = useSetRecoilState(todoListState); // 수정 setTodoList로 변경함

    const [todoList, setTodoList] = useRecoilState(todoListState); // 읽기 + 수정

    const todoListStatsState = selector({
      key: 'todoListStatsState',
      get: ({get}) => { // get을 통해 의존성을 추적한다. 의존성이 변하면 재실행된다
                        selector은 기존 state 가공하는 용도인 듯
          ...
        return {
          ...
        };
      },
    });
