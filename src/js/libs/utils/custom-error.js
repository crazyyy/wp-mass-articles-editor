//https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Error

class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Передати залишкові параметри (в тому числі параметри розробника) до батьківського конструктора
    super(...params)

    // Підтримує правильне трасування стеку в точці, де була викинута помилка (працює лише на V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError'
    // Користувацька інформація для налагодження
    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('baz', 'bazMessage')
} catch(e) {
  console.error(e.name)    //CustomError
  console.error(e.foo)     //baz
  console.error(e.message) //bazMessage
  console.error(e.stack)   //stacktrace
}
