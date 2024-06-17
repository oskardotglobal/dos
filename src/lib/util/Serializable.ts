/**
 * An interface providing methods to convert `T` to `t` and back.
 * @interface
 */
export interface Serializable<T, t> {
    /**
     * Convert the current instance of `T` to a plain object of type `t`.
     * All properties in `t` must either be a plain object, a primitive or implement the `Serializable` interface.
     *
     * @method
     */
    serialize(): t;

    /**
     * Convert a plain object of type `t` to an instance of class `T` by calling the constructor. <br />
     *
     * Call with `T.prototype.serialize`. **DO NOT CALL ON INSTANCES**
     * @static
     * @method
     */
    deserialize(value: t): T;
}