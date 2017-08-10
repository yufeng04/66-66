import san from 'san'

// style

// route
import Todo from './todo/todo'
import {router} from 'san-router'

router.add({rule: '/', Component: Todo, target: '#app'});

// start
router.start()
