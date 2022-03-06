import { applyMiddleware, combineReducers, createStore, Dispatch } from 'redux';
import initialState from 'store/initialState';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'sagas';
import { userReducer } from 'reducers/users';

const rootReducer = combineReducers({
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const action = (type: string, payload: any) => store.dispatch({ type, payload });
