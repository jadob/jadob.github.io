---
layout: component
title:  "SchemaManager"
date:   2014-10-18 12:58:29
categories: database schema sql
---

SchemaManager allows you too modify and store your database schema in your project. It uses 
[Doctrine DBAL](http://docs.doctrine-project.org/projects/doctrine-dbal/en/latest/index.html){:target="_blank"} to manage 
everything, so your schema can be easily ported between all supported 
[platforms](http://docs.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/platforms.html){:target="_blank"}.

<div class="alert alert-primary" role="alert">
  <strong>SchemaManager is cli-only.</strong> You can't use it in non-cli mode.
</div>


***


### Terms of contents:
- [Basic schema example](#basic-schema-example)
- [Field Types](#field-types)
- [Field Constraints](#field-constraints)
- [Adding special parameters](#adding-special-parameters)


***


### [Basic schema example](#basic-schema-example)

Create schema.php file in your config file:

{% highlight php %}

//<PROJECT_ROOT>/config/schema.php

use Jadob\SchemaManager\Definition\Table;

return [
    'tables' => [
        'users' => [
            'fields' => [
                'id' => Table::AUTO_INCREMENT | Table::TYPE_INT | Table::PRIMARY_KEY,
                'username' => Table::TYPE_TEXT,
                'name' => Table::TYPE_TEXT,
                'password' => Table::TYPE_TEXT,
                'avatar_url' => Table::TYPE_TEXT | Table::NULLABLE,
                'joined_date' => Table::TYPE_DATETIME,
            ]
        ],
    ]
]; 

{% endhighlight %}

Schema file is a big associative array with all your tables definitions. By default, there is no data, but you can easily 
add new tables and configure it. All keys in `tables` array are schema names. In your schema array, you should create an
``fields`` array with columns. Keys in ``fields`` will be your column names, and it's values will be used to define
 type and constraints.
        

***


### [Field Types](#field-types)

All field types and constraints are stored as a bitmask, like above. SchemaManager will parse it and create an table object.
Types and constants are stored in ``Jadob\SchemaManager\Definition\Table``. You should use it at the beginning of file to keep your 
schema file clear.

<div class="alert alert-success" role="alert">
  <strong>Protip:</strong> Use class constant instead of "raw" bitmasks to prevent BC Breaks and other issues.
</div>


| Constant name  | Field type          |
| -------------  | ------------------- |
| TYPE_INT       | Integer             |
| TYPE_BIGINT    | Bigint              |
| TYPE_FLOAT     | Float               |
| TYPE_DOUBLE    | Double              |
| TYPE_BOOLEAN   | Tinyint<sup>1</sup> |
| TYPE_TEXT      | String              |
| TYPE_VARCHAR   | Varchar             |
| TYPE_DATETIME  | Datetime            |
| TYPE_TIMESTAMP | Timestamp           |
| TYPE_DATE      | Date                |

1 - see [DBAL Reference](http://docs.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/types.html#boolean){:target="_blank"} for more details.


***


### [Field Constraints](#field-constraints)


eeeeee


***


### [Adding special parameters](#adding-special-parameters)




