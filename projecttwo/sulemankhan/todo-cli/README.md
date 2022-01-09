1. Make sure everything is working
    ```
    node --version
    npm --version
    tsc --version
    ```
2.  Initialize project 

    ```npm init --yes```

3. Add configuration file `tsconfig.json` for typescript 

4. Write typescript code in `src` folder and compile it using `tsc` command, and it will generate javascript code in `dist` folder. Run the code using `node dist/index.js`

5. Implement TodoItem, and TodoCollection.

6. Install inquirer pacakge

    ```
    npm install inquirer@7.3.3
    npm install --save-dev @types/inquirer
    ```

7. Install lowdb
    ```
    npm install lowdb@1.0.0
    npm install --save-dev @types/lowdb
    ```


Commands for development:

1. Use `tsc` to compile the code.
2. Publish package using `npm publish --access public`   

Command for User:

1. Install package using `npm i sulemankhan-todo@1.0.4 -g`
2. Use `suleman-todo list` to list the todo tasks.
3. Use `suleman-todo remove` to remove completed tasks.
4. Use `suleman-todo add [task]` to add new task.