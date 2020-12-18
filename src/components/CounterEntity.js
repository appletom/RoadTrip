import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useEntityComponentSystem } from 'react-entity-component-system'




const CounterEntity = {
  Renderer: props => <h4>{props.count}</h4>,
  count: 0,


}

export default CounterEntity