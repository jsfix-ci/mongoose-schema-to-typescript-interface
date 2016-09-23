"use strict";
var mongoose_1 = require('mongoose');
var chai_1 = require('chai');
var generate_interface_1 = require('../generate-interface');
describe("generateInterface", function () {
    it("should return a stringified TypeScript interface", function () {
        var input = generate_interface_1.default("EmptyInterface", {});
        var output = "interface IEmptyInterface {}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: ObjectId' to TypeScript type 'string'", function () {
        var input = generate_interface_1.default("ObjectIdInterface", {
            id: {
                type: mongoose_1.Schema.Types.ObjectId,
                required: true,
            },
        });
        var output = "interface IObjectIdInterface {\n\tid: string;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'required: false' to TypeScript optional property syntax", function () {
        var input = generate_interface_1.default("OptionalPropInterface", {
            id: {
                type: mongoose_1.Schema.Types.ObjectId,
                required: false,
            },
        });
        var output = "interface IOptionalPropInterface {\n\tid?: string;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: Mixed' to TypeScript type '{}'", function () {
        var input = generate_interface_1.default("MixedInterface", {
            id: {
                type: mongoose_1.Schema.Types.Mixed,
                required: true,
            },
        });
        var output = "interface IMixedInterface {\n\tid: {};\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: String' to TypeScript type 'string'", function () {
        var input = generate_interface_1.default("NameStringInterface", {
            name: {
                type: String,
                required: true,
            },
        });
        var output = "interface INameStringInterface {\n\tname: string;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: String' and 'enum: [...]' to TypeScript 'string literal type'", function () {
        var input = generate_interface_1.default("StringOptionsInterface", {
            chosen_letter: {
                type: String,
                enum: ['a', 'b', 'c'],
                required: true,
            },
        });
        var output = "interface IStringOptionsInterface {\n\tchosen_letter: 'a' | 'b' | 'c';\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: Number' to TypeScript type 'number'", function () {
        var input = generate_interface_1.default("AgeNumberInterface", {
            age: {
                type: Number,
                required: true,
            },
        });
        var output = "interface IAgeNumberInterface {\n\tage: number;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: Number' to TypeScript type 'number'", function () {
        var input = generate_interface_1.default("AgeNumberInterface", {
            age: {
                type: Number,
                required: true,
            },
        });
        var output = "interface IAgeNumberInterface {\n\tage: number;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: Boolean' to TypeScript type 'boolean'", function () {
        var input = generate_interface_1.default("EnabledBooleanInterface", {
            enabled: {
                type: Boolean,
                required: true,
            },
        });
        var output = "interface IEnabledBooleanInterface {\n\tenabled: boolean;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: Date' to TypeScript type 'Date'", function () {
        var input = generate_interface_1.default("StartInterface", {
            start: {
                type: Date,
                required: true,
            },
        });
        var output = "interface IStartInterface {\n\tstart: Date;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: []' to TypeScript type 'Array<any>'", function () {
        var input = generate_interface_1.default("AnyListInterface", {
            stuff: {
                type: [],
                required: true,
            },
        });
        var output = "interface IAnyListInterface {\n\tstuff: Array<any>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: [Number]' to TypeScript type 'Array<number>'", function () {
        var input = generate_interface_1.default("NumberListInterface", {
            list: {
                type: [Number],
                required: true,
            },
        });
        var output = "interface INumberListInterface {\n\tlist: Array<number>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: [String]' to TypeScript type 'Array<string>'", function () {
        var input = generate_interface_1.default("NameListInterface", {
            names: {
                type: [String],
                required: true,
            },
        });
        var output = "interface INameListInterface {\n\tnames: Array<string>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: [Boolean]' to TypeScript type 'Array<boolean>'", function () {
        var input = generate_interface_1.default("StatusListInterface", {
            statuses: {
                type: [Boolean],
                required: true,
            },
        });
        var output = "interface IStatusListInterface {\n\tstatuses: Array<boolean>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: [Date]' to TypeScript type 'Array<Date>'", function () {
        var input = generate_interface_1.default("DateListInterface", {
            dates: {
                type: [Date],
                required: true,
            },
        });
        var output = "interface IDateListInterface {\n\tdates: Array<Date>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: [ObjectId]' to TypeScript type 'Array<string>'", function () {
        var input = generate_interface_1.default("ObjectIdListInterface", {
            ids: {
                type: [mongoose_1.Schema.Types.ObjectId],
                required: true,
            },
        });
        var output = "interface IObjectIdListInterface {\n\tids: Array<string>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should convert mongoose 'type: [Mixed]' to TypeScript type 'Array<{}>'", function () {
        var input = generate_interface_1.default("MixedListInterface", {
            id: {
                type: [mongoose_1.Schema.Types.Mixed],
                required: true,
            },
        });
        var output = "interface IMixedListInterface {\n\tid: Array<{}>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should dynamically create any nested mongoose schemas as TypeScript interfaces", function () {
        var input = generate_interface_1.default("MainInterface", {
            nested: {
                stuff: {
                    type: String,
                    required: false,
                },
            },
        });
        var output = "interface IMainInterfaceINested {\n\tstuff?: string;\n}\n\ninterface IMainInterface {\n\tnested: IMainInterfaceINested;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should format nested schema names as TitleCase", function () {
        var input = generate_interface_1.default("MainInterface", {
            snake_case: {
                stuff: {
                    type: String,
                    required: false,
                },
            },
        });
        var output = "interface IMainInterfaceISnakeCase {\n\tstuff?: string;\n}\n\ninterface IMainInterface {\n\tsnake_case: IMainInterfaceISnakeCase;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should support multiple schema fields on newlines", function () {
        var input = generate_interface_1.default("MultipleFieldsInterface", {
            field1: {
                type: String,
                required: true,
            },
            field2: {
                type: String,
                required: true,
            },
        });
        var output = "interface IMultipleFieldsInterface {\n\tfield1: string;\n\tfield2: string;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should support arrays of nested schemas as a field type", function () {
        var nested = {
            stuff: {
                type: String,
                required: false,
            }
        };
        var input = generate_interface_1.default("MainInterface", {
            multipleNested: {
                type: [nested],
            },
        });
        var output = "interface IMainInterfaceIMultipleNested {\n\tstuff?: string;\n}\n\ninterface IMainInterface {\n\tmultipleNested: Array<IMainInterfaceIMultipleNested>;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
    it("should process a complex example", function () {
        var nestedSchema = new mongoose_1.Schema({
            thing: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Thing',
            },
        }, {});
        var nestedItemSchema = new mongoose_1.Schema({
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            priority: {
                type: Number,
                required: true,
                default: 0,
            },
        }, {
            _id: false,
            id: false,
        });
        var mainSchema = new mongoose_1.Schema({
            name: {
                type: String,
                required: true,
                index: true,
                placeholder: 'PLACEHOLDER_NAME',
            },
            referencedDocument: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'RefDoc',
                immutable: true,
                required: true,
            },
            stringOptionsWithDefault: {
                type: String,
                required: true,
                default: 'defaultVal',
                enum: ['defaultVal', 'Option2'],
            },
            setting_type: {
                type: String,
            },
            setting_value: {
                type: Number,
                min: 0,
                validate: function validate(val) {
                    if (this.setting_type === 'foo') {
                        if (val > 1) {
                            return false;
                        }
                    }
                    return true;
                },
            },
            enabled: {
                type: Boolean,
                required: true,
                default: false,
            },
            nestedSchema: nestedSchema,
            nestedInline: {
                prop: {
                    type: Number,
                    required: true,
                },
            },
            nestedEmptyInline: {},
            nestedItems: {
                type: [nestedItemSchema],
            },
        }, {
            strict: true,
        });
        mainSchema.foo = 'bar';
        mainSchema.searchable = true;
        mainSchema.index({
            name: 'text',
        });
        var input = generate_interface_1.default("MainInterface", mainSchema);
        var output = "interface IMainInterfaceINestedSchema {\n\tthing?: string;\n\t_id?: string;\n}\n\ninterface IMainInterfaceINestedInline {\n\tprop: number;\n}\n\ninterface IMainInterfaceINestedEmptyInline {}\n\ninterface IMainInterfaceINestedItems {\n\tuser: string;\n\tpriority: number;\n}\n\ninterface IMainInterface {\n\tname: string;\n\treferencedDocument: string;\n\tstringOptionsWithDefault: 'defaultVal' | 'Option2';\n\tsetting_type?: string;\n\tsetting_value?: number;\n\tenabled: boolean;\n\tnestedSchema: IMainInterfaceINestedSchema;\n\tnestedInline: IMainInterfaceINestedInline;\n\tnestedEmptyInline: IMainInterfaceINestedEmptyInline;\n\tnestedItems: Array<IMainInterfaceINestedItems>;\n\t_id?: string;\n}\n\n";
        chai_1.expect(input).to.equal(output);
    });
});
//# sourceMappingURL=generate-interface.spec.js.map